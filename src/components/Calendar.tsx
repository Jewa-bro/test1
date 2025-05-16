import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar as CalendarIcon } from 'lucide-react';

const Calendar = () => {
  const [events] = useState([
    {
      title: '초보자 특별 강좌',
      start: '2025-01-10',
      backgroundColor: '#FCD34D',
      textColor: '#1F2937',
      borderColor: '#F59E0B'
    },
    {
      title: '설 연휴 휴무',
      start: '2025-02-09',
      end: '2025-02-13',
      backgroundColor: '#EF4444',
      textColor: '#ffffff',
      borderColor: '#DC2626'
    },
    {
      title: '신규 총기 체험 이벤트',
      start: '2025-02-15',
      backgroundColor: '#10B981',
      textColor: '#ffffff',
      borderColor: '#059669'
    }
  ]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .fc {
        --fc-border-color: rgba(75, 85, 99, 0.3);
        --fc-button-bg-color: #4B5563;
        --fc-button-border-color: #4B5563;
        --fc-button-hover-bg-color: #374151;
        --fc-button-hover-border-color: #374151;
        --fc-button-active-bg-color: #374151;
        --fc-today-bg-color: rgba(252, 211, 77, 0.1);
        --fc-neutral-bg-color: #1F2937;
        --fc-list-event-hover-bg-color: #374151;
      }
      .fc-theme-standard td, .fc-theme-standard th {
        border-color: var(--fc-border-color);
      }
      .fc-day-today {
        background: var(--fc-today-bg-color) !important;
      }
      .fc-button {
        padding: 6px 12px !important;
      }
      .fc-button-primary:not(:disabled):active,
      .fc-button-primary:not(:disabled).fc-button-active {
        background-color: var(--fc-button-active-bg-color) !important;
      }
      .fc-daygrid-day-number {
        color: #E5E7EB;
      }
      .fc th {
        color: #D1D5DB;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <CalendarIcon className="mr-3 text-yellow-400" />
            일정 <span className="text-yellow-400 ml-2">안내</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            HB Shooting의 주요 일정과 이벤트를 확인하세요.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-xl">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth'
            }}
            locale="ko"
            height="auto"
            firstDay={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;