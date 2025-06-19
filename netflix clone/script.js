// Loader hide after 2.5 sec
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2500);
});

// Dark/Light Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll and pop-up animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.popup-item').forEach(item => {
  observer.observe(item);
});

// Ripple effect
const buttons = document.querySelectorAll(".ripple-btn");

buttons.forEach(button => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});

// Count-up animation for stats
const counters = document.querySelectorAll(".count");
let statsStarted = false;

const statsSection = document.querySelector(".stats-section");

const statsObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !statsStarted) {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const step = target / 200;

      const updateCount = () => {
        count += step;
        if (count < target) {
          counter.textContent = Math.floor(count).toLocaleString();
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      updateCount();
    });

    statsStarted = true;
  }
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

// Bar chart for genres
const ctx = document.getElementById('genreChart').getContext('2d');

const genreChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Romance'],
    datasets: [{
      label: 'Hours Watched (in millions)',
      data: [120, 90, 75, 60, 80, 65],
      backgroundColor: [
        '#e50914', '#ff6f61', '#ffcc00', '#800000', '#008080', '#663399'
      ],
      borderRadius: 5,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white'
        }
      },
      x: {
        ticks: {
          color: 'white'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    }
  }
});
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
