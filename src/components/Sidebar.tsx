


export function Sidebar () {

    return (
        <div className="side">
            <div className="logo">
                <img src="../../public/logoSmall.png" alt="logo" />
            </div>
            <div className="menu">
                <ul className="tasks">
                    <li className="task">
                        <div className="task-svg">
                        </div>
                        <div className="task-text">Дашборд</div>
                    </li>
                    <li className="task">
                        <div className="task-svg">

                        </div>
                        <div className="task-text">Настройки</div>
                    </li>
                    <li className="task">
                        <div className="task-svg">

                        </div>
                        <div className="task-text">Выйти</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;