<div class="max-w-4xl mx-auto p-4 py-12 lg:py-16">
    <h1 class="text-3xl font-bold mb-8 text-center px-4">Events Calender</h1>
    <div id='calendar'></div>
</div>

<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.14/index.global.min.js'></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth'
        });
        calendar.render();
    });
</script>