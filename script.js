// Page navigation
function showDashboard() {
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('aboutPage').classList.remove('active');
    document.getElementById('dashboardPage').classList.add('active');
    window.scrollTo(0, 0);
    initCharts();
}

function showHome() {
    document.getElementById('dashboardPage').classList.remove('active');
    document.getElementById('aboutPage').classList.remove('active');
    document.getElementById('homePage').classList.add('active');
    window.scrollTo(0, 0);
}

function showAbout() {
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('dashboardPage').classList.remove('active');
    document.getElementById('aboutPage').classList.add('active');
    window.scrollTo(0, 0);
}

// Chart instances
let charts = {};

// Initialize all charts
function initCharts() {
    // Only initialize if not already initialized
    if (Object.keys(charts).length > 0) return;

    // Chart.js default configuration
    Chart.defaults.color = '#a78bfa';
    Chart.defaults.borderColor = 'rgba(76, 29, 149, 0.3)';

    // Messages Per Day Chart
    const messagesPerDayCtx = document.getElementById('messagesPerDayChart').getContext('2d');
    charts.messagesPerDay = new Chart(messagesPerDayCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Messages',
                data: [245, 312, 189, 421, 398, 502, 456],
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#a855f7',
                pointBorderColor: '#a855f7',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a0f2e',
                    borderColor: '#7c3aed',
                    borderWidth: 1,
                    titleColor: '#e9d5ff',
                    bodyColor: '#e9d5ff',
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(76, 29, 149, 0.3)',
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Messages Per Second Chart
    const messagesPerSecondCtx = document.getElementById('messagesPerSecondChart').getContext('2d');
    charts.messagesPerSecond = new Chart(messagesPerSecondCtx, {
        type: 'line',
        data: {
            labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
            datasets: [{
                label: 'Rate (msg/s)',
                data: [0.2, 0.1, 0.3, 1.2, 2.1, 2.8, 3.5, 2.9],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#60a5fa',
                pointBorderColor: '#60a5fa',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a0f2e',
                    borderColor: '#7c3aed',
                    borderWidth: 1,
                    titleColor: '#e9d5ff',
                    bodyColor: '#e9d5ff',
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(76, 29, 149, 0.3)',
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Member Activity Chart
    const memberActivityCtx = document.getElementById('memberActivityChart').getContext('2d');
    charts.memberActivity = new Chart(memberActivityCtx, {
        type: 'bar',
        data: {
            labels: ['Jan 1', 'Jan 8', 'Jan 15', 'Jan 22', 'Jan 29', 'Feb 5'],
            datasets: [
                {
                    label: 'Joined',
                    data: [12, 18, 15, 22, 19, 25],
                    backgroundColor: '#8b5cf6',
                    borderRadius: 8,
                    borderSkipped: false
                },
                {
                    label: 'Left',
                    data: [3, 5, 7, 4, 6, 8],
                    backgroundColor: '#ef4444',
                    borderRadius: 8,
                    borderSkipped: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#e9d5ff',
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#1a0f2e',
                    borderColor: '#7c3aed',
                    borderWidth: 1,
                    titleColor: '#e9d5ff',
                    bodyColor: '#e9d5ff',
                    padding: 12
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(76, 29, 149, 0.3)',
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Channel Activity Chart
    const channelActivityCtx = document.getElementById('channelActivityChart').getContext('2d');
    charts.channelActivity = new Chart(channelActivityCtx, {
        type: 'bar',
        data: {
            labels: ['general', 'gaming', 'music', 'memes', 'help'],
            datasets: [{
                label: 'Messages',
                data: [1245, 892, 654, 1032, 423],
                backgroundColor: '#8b5cf6',
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a0f2e',
                    borderColor: '#7c3aed',
                    borderWidth: 1,
                    titleColor: '#e9d5ff',
                    bodyColor: '#e9d5ff',
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    grid: {
                        display: false
                    }
                },
                x: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(76, 29, 149, 0.3)',
                        drawBorder: false
                    }
                }
            }
        }
    });

    // Voice Activity Chart
    const voiceActivityCtx = document.getElementById('voiceActivityChart').getContext('2d');
    charts.voiceActivity = new Chart(voiceActivityCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Minutes',
                data: [340, 420, 280, 510, 680, 890, 750],
                backgroundColor: [
                    '#9333ea',
                    '#3b82f6',
                    '#8b5cf6',
                    '#6366f1',
                    '#a855f7',
                    '#9333ea',
                    '#3b82f6'
                ],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a0f2e',
                    borderColor: '#7c3aed',
                    borderWidth: 1,
                    titleColor: '#e9d5ff',
                    bodyColor: '#e9d5ff',
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(76, 29, 149, 0.3)',
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}