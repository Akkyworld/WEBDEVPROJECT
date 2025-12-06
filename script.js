const ctx = document.getElementById("chart");
new Chart(ctx, {
type: "doughnut",
data: {
labels: ["Food", "Bills", "Savings", "Shopping"],
datasets: [
{
data: [300, 150, 200, 100],
},
],
},
});
