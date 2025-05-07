import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./App.css";
// Регистрируем необходимые элементы для Pie Chart
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  // Данные для графика
  const data = {
    labels: [
      "Выполненные",
      "В очереди",
      "В процессе",
      "На доработку",
      "Отложенные",
    ],
    datasets: [
      {
        label: "Процент задач",
        data: [40, 25, 20, 10, 5], // Процентное соотношение
        backgroundColor: [
          "rgba(67, 224, 101, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(25, 84, 37, 0.6)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Цвета задач
  const colors = [
    "rgba(67, 224, 101, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 99, 132, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(153, 102, 255, 0.6)",
  ];

  return (
    <div className="container">
      <h2 className="title">Список задач для командной разработки проекта</h2>
      <div className="main-box">
        <div className="pie">
          <Pie data={data} />
        </div>
        <table className="pie">
          <thead>
            <tr>
              <th className="table">Статус задачи</th>
              <th className="table">Процент</th>
              <th className="table">Цвет</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table">Выполненные</td>
              <td className="table">40%</td>
              <td className="table" style={{ backgroundColor: colors[0] }}></td>
            </tr>
            <tr>
              <td className="table">В очереди</td>
              <td className="table">25%</td>
              <td className="table" style={{ backgroundColor: colors[1] }}></td>
            </tr>
            <tr>
              <td className="table">В процессе</td>
              <td className="table">20%</td>
              <td className="table" style={{ backgroundColor: colors[2] }}></td>
            </tr>
            <tr>
              <td className="table">На доработку</td>
              <td className="table">10%</td>
              <td className="table" style={{ backgroundColor: colors[3] }}></td>
            </tr>
            <tr>
              <td className="table">Отложенные</td>
              <td className="table">5%</td>
              <td className="table" style={{ backgroundColor: colors[4] }}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
