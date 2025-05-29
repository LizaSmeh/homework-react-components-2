import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

function App() {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	let firstStep = activeIndex === 0 && true;
	let lastStep = activeIndex === 6 && true ;
	const onClickBack = () => {
		setActiveIndex(activeIndex - 1);
	};
	const onClickForward = () => {
		if (!lastStep){
			setActiveIndex(activeIndex + 1);
		}else {
			setActiveIndex(0)
		}


	};


	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles["steps-list"]}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						 {steps.map(({id, title}, index) => <li key={id}
							className={styles["steps-item"] + `${activeIndex === index ? " " +
								styles.done + " " +	styles.active : " "}`}
						>
							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
							<button className={styles["steps-item-button"]} onClick={()=>{setActiveIndex(index)}} >
								{index+1}
							</button>
							{/* При клике на кнопку установка выбранного шага в качестве активного */}
							{title}
						</li>)}
						{/* <li
							className={styles["steps-item"] + " " + styles.done}
						>
							<button className={styles["steps-item-button"]}>
								2
							</button>
							Шаг 2
						</li>
						<li
							className={
								styles["steps-item"] +
								" " +
								styles.done +
								" " +
								styles.active
							}
						>
							<button className={styles["steps-item-button"]}>
								3
							</button>
							Шаг 3
						</li>
						<li className={styles["steps-item"]}>
							<button className={styles["steps-item-button"]}>
								4
							</button>
							Шаг 4
						</li> */}
					</ul>
					<div className={styles["buttons-container"]}>
						<button className={styles.button} onClick={onClickBack} disabled={firstStep}>Назад</button>
						<button className={styles.button} onClick={onClickForward}>
							{!lastStep ? 'Далее' : 'Начать сначала'}
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;
