import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './TaskForm.module.css'
// Interface
import { ITask } from '../interfaces/ITask';


type Props = {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    // Coloca "?" antes dos dois pontos paraque o atributo fique opcional
    task?: ITask | null
    handleUpdate?(id: number, title: string, difficulty: number): void
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    useEffect(() => {
        if (task) {
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty);
        }

    }, [task])

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (handleUpdate) {

            handleUpdate(id, title, difficulty);

        } else {

            const id = Math.floor(Math.random() * 1000);

            const newTask: ITask = { id, title, difficulty };

            setTaskList!([...taskList, newTask]);
            // "!" significa que é um atributo opcional

            setTitle("");
            setDifficulty(0);
            console.log(taskList);
        }
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
    }
    //  console.log(title,difficulty)
    return (
        <form className={styles.form} onSubmit={addTaskHandler}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name='title' placeholder='Titulo da tarefa' onChange={handleChange} value={title} />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="dificulty">Dificuldade:</label>
                <input type="text" name='dificulty' placeholder='Dificuldade da tarefa' onChange={handleChange} value={difficulty} />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm