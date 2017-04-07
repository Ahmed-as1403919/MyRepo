/**
 * Created by user on 07-Apr-17.
 */
$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2017-04-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'Homework-2',
                start: '2017-04-01',
                end: '2017-04-03'
            },
            {
                title: 'Quiz-1',
                start: '2017-05-09T16:00:00'
            },
            {
                title: 'Midterm-2',
                start: '2017-04-09T18:00:00',
                end: '2017-04-09T20:00:00'
            },
            {
                title: 'Project',
                start: '2017-04-09T18:00:00',
                end: '2017-04-11T20:00:00'
            }

        ]
    });

});
