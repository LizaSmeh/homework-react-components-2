import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

function App() {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	let firstStep = activeIndex === 0;
	let lastStep = activeIndex === 6;
	const onClickBack = () => {
		setActiveIndex(activeIndex - 1);
	};
	const onClickForward = () => {
		if (!lastStep) {
			setActiveIndex(activeIndex + 1);
		} else {
			setActiveIndex(0);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles["steps-list"]}>
						{steps.map(({ id, title }, index) => (
							<li
								key={id}
								className={
									styles["steps-item"] +
									`${
										activeIndex === index
											? " " + styles.active
											: " "
									} ${
										activeIndex > index
											? " " + styles.done
											: " "
									}`
								}
							>
								<button
									className={styles["steps-item-button"]}
									onClick={() => {
										setActiveIndex(index);
									}}
								>
									{index + 1}
								</button>

								{title}
							</li>
						))}
					</ul>
					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							onClick={onClickBack}
							disabled={firstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={onClickForward}
						>
							{!lastStep ? "Далее" : "Начать сначала"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;
