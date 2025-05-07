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
          "rgba(75, 192, 192, 1)",
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
    <div id="container">
      <h2 style={{ textAlign: "center" }}>
        Список задач для командной разработки проекта
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            borderCollapse: "collapse",
            width: "50%",
          }}
        >
          <Pie data={data} />
        </div>
        <table
          style={{
            marginTop: "20px",
            borderCollapse: "collapse",
            width: "50%",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Статус задачи
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Процент
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Цвет</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Выполненные
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>40%</td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: colors[0],
                }}
              ></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                В очереди
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>25%</td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: colors[1],
                }}
              ></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                В процессе
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>20%</td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: colors[2],
                }}
              ></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                На доработку
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>10%</td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: colors[3],
                }}
              ></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Отложенные
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>5%</td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: colors[4],
                }}
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
