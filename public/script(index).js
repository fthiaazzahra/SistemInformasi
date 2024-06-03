document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/patient-data');
    const data = await response.json();

    const ctx = document.getElementById('patientChart').getContext('2d');
    const patientData = {
        labels: ['Pria', 'Wanita'],
        datasets: [{
            label: 'Jumlah Pasien',
            data: data, // Menggunakan data dari server
            backgroundColor: [
                'rgba(115, 172, 249, 0.2)',
                'rgba(250, 96, 96, 0.2)'
            ],
            borderColor: [
                'rgba(115, 172, 249, 1)',
                'rgba(250, 96, 96, 1)'
            ],
            borderWidth: 1
        }]
    };

    const patientChart = new Chart(ctx, {
        type: 'pie', // Ubah ke 'pie' atau 'doughnut'
        data: patientData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';

                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
});
