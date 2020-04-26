import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

document.addEventListener('DOMContentLoaded', function() {
  let calendarEl: HTMLElement = document.getElementById('calendar')!;

  let calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, listPlugin, timeGridPlugin, resourceTimelinePlugin,resourceTimeGridPlugin  ],
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
    now: '2018-02-07',
    editable: true, // enable draggable events
    aspectRatio: 1.8,
    scrollTime: '00:00', // undo default 6am scrollTime
    header: {
      left: 'today prev,next',
      center: 'title',
      right: 'resourceTimelineDay,Vertical,timeGridWeek,dayGridMonth,listWeek'
    },
    defaultView: 'resourceTimelineDay',
    views: {
      Vertical: {
        type: 'resourceTimeGridDay',
        buttonText: 'Vertical'
      }
    },
    resourceLabelText: 'Rooms',
    resources: [
      { id: 'a', title: 'Room A' },
      { id: 'b', title: 'Room B', eventColor: 'green' },
      { id: 'c', title: 'Room C', eventColor: 'orange' },
      { id: 'd', title: 'Room D', children: [
        { id: 'd1', title: 'Room D1' },
        { id: 'd2', title: 'Room D2' }
      ] },
      { id: 'e', title: 'Room E' },
      { id: 'f', title: 'Room F', eventColor: 'red' },
      { id: 'g', title: 'Room G' },
      { id: 'h', title: 'Room H' },
      { id: 'i', title: 'Room I' },
      { id: 'j', title: 'Room J' },
    ],
    events: [
      { id: '1', resourceId: 'b', start: '2018-02-07T02:00:00', end: '2018-02-07T07:00:00', title: 'event 1' },
      { id: '2', resourceId: 'c', start: '2018-02-07T05:00:00', end: '2018-02-07T22:00:00', title: 'event 2' },
      { id: '3', resourceId: 'd', start: '2018-02-06', end: '2018-02-08', title: 'event 3' },
      { id: '4', resourceId: 'e', start: '2018-02-07T03:00:00', end: '2018-02-07T08:00:00', title: 'event 4' },
      { id: '5', resourceId: 'f', start: '2018-02-07T00:30:00', end: '2018-02-07T02:30:00', title: 'event 5' }
    ]
  });

  calendar.render();
});
