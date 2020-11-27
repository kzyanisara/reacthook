import React, {useEffect, useState} from 'react';

export const TodoList = () => {
    const [text, textUpdate] = useState("")
    const [list, listUpdate] = useState([])
    const [done, doneUpdate] = useState([])
    const [Api, apiUpdate] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
            apiUpdate(json)
        })
    }, [])

    useEffect(() => {
        console.log('list or done change')
    },[list, done])

    useEffect(() =>{
        console.log('track list')
    }, [list])

    useEffect(() =>{
        console.log('track done')
    }, [done])

    useEffect(() =>{
        console.log('update')
    })

    const handleDone = (index) => {
        let data = [...list]
        let move = data.splice(index, 1)
        doneUpdate([...done, ...move])
        listUpdate(data)
    }

    const handleAdd = () => {
        listUpdate([...list, text])
        textUpdate("")
    }

    const handleDelete = (index) => {
        let data = [...done]
        data.slice(index, 1)
        doneUpdate(data)
    }

    const handleBack = (index) => {
        let data = [...done]
        let move = data.splice(index, 1)
        listUpdate([...list, ...move])
        doneUpdate(data)
    }

    return (
        <div style={{display: "grid", gridTemplateColumns: "300px 300px", justifyItem: "center", gap: "10px"}}>
            <div>
                <h3>TodoList</h3>
                <ul style={{listStyle: 'none'}}>
                    {list.map(((text, index) => <li>{text} <span onClick={() =>
                        handleDone()}>
                        >>>
                    </span>
                    </li>))}
                </ul>
                <div>
                    <input type="text" value={text} onChange={(e) => textUpdate(e.target.value)}/>
                    <button onClick={() => handleAdd()}>add text</button>
                </div>
            </div>
            <div>
                <h3>Done</h3>
                <ul style={{listStyle: 'none'}}>
                    {done.map((text, index) => <li>{text}
                            <span>
                        <button onClick={() => handleDelete()}>delete</button>

                        <button onClick={() => handleBack()}
                        >back</button>
                    </span>

                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;
