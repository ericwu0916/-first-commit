// 預設課程數據（根據實際需求修改）
const courseData = {
  economics: [50, 30, 20], // 觀看時數示例
  accounting: [40, 25, 35],
  statistics: [30, 45, 25],
  calculus: [20, 40, 40],
  basicProgramming: [60, 20, 20],
  advancedProgramming: [55, 30, 15],
};

// 圓餅圖初始設定
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ["Airi Satou", "Brielle Williamson", "Cedric Kelly"], // 預設標籤
      datasets: [{
          data: courseData.economics, // 預設數據
          backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
          hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
  },
  options: {
      maintainAspectRatio: false,
      tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
      },
      legend: {
          display: true
      },
      cutoutPercentage: 80,
  },
});

// 監聽下拉選單變化
document.getElementById("courseSelect").addEventListener("change", function() {
  const selectedCourse = this.value; // 獲取選中的課程
  myPieChart.data.datasets[0].data = courseData[selectedCourse]; // 更新數據
  myPieChart.update(); // 更新圓餅圖
});
