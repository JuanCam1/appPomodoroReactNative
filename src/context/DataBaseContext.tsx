import { Task } from "@/views/dashboard/models/Task.model";
import * as SQLite from "expo-sqlite";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

export type DataBasecontextState = {
  openDatabase: () => SQLite.SQLiteDatabase;
  closeDatabase: () => void;
  findTasks: (typeTask: string) => Task[];
  addTask: (task: Task) => Task[];
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
};

export const DataBaseContext = createContext<DataBasecontextState | undefined>(undefined);

type Props = {
  children: ReactNode;
};
const DataBaseProvider = ({ children }: Props) => {
  const db = SQLite.openDatabase("/db.db");

  const openDatabase = () => {
    return db;
  };

  const closeDatabase = () => {
    db.closeAsync;
  };

  useEffect(() => {
    try {
      const db = openDatabase();
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists tasks (id text primary key not null, title text not null, description text not null,priority text not null,date text not null,typeTask text not null,isCompleted text not null);"
        );
      });
      closeDatabase();
    } catch (error) {
      console.log("No connection");
    }
  }, []);

  const findTasks = (typeTask: string) => {
    const [tasks, setTasks] = useState([] as Task[]);
    try {
      const db = openDatabase();
      if (db) {
        db.transaction((tx) => {
          tx.executeSql(
            `SELECT * FROM tasks WHERE typeTask = ?`,
            [typeTask],
            (_, { rows: { _array } }) => setTasks(_array)
          );
        });
      } else {
        setTasks([]);
      }
      return tasks;
    } catch (error) {
      return [];
    } finally {
      closeDatabase();
    }
  };

  const addTask = (task: Task) => {
    const [tasks, setTasks] = useState([] as Task[]);

    try {
      const db = openDatabase();
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO tasks (id, title, description, priority, date, typeTask, isCompleted) VALUES (?, ?, ?, ?, ?, ?, ?);",
          [
            task.id,
            task.title,
            task.description,
            task.priority,
            task.date,
            task.typeTask,
            task.isCompleted.toString()
          ]
        );
      });
      setTasks(findTasks(task.typeTask));
    } catch (error) {
      setTasks([]);
    } finally {
      closeDatabase();
    }
    return tasks;
  };

  const deleteTask = (id: string) => {
    try {
      const db = openDatabase();
      db.transaction((tx) => {
        tx.executeSql("DELETE FROM tasks WHERE id = ?;", [id]);
      });
    } catch (error) {
      console.log(error);
    } finally {
      closeDatabase();
    }
  };

  const updateTask = (task: Task) => {
    try {
      const db = openDatabase();
      db.transaction((tx) => {
        tx.executeSql(
          `update tasks set title = ${task.title},description= ${task.description},priority= ${
            task.priority
          },date= ${task.date},typeTask= ${
            task.typeTask
          },isCompleted= ${task.isCompleted.toString()} where id = ?;`,
          [task.id]
        );
      });
    } catch (error) {
      console.log(error);
    } finally {
      closeDatabase();
    }
  };

  return (
    <DataBaseContext.Provider
      value={{ openDatabase, closeDatabase, findTasks, addTask, deleteTask, updateTask }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};

export default DataBaseProvider;

export const useSqlContext = () => {
  const context = useContext(DataBaseContext);

  if (context === undefined) {
    throw new Error("useSqlContext must be within ThemeProvider");
  }
  return context;
};
