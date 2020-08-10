export default function convertHourToMinutes(time: string) {
  
  // Formato: 8:00
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = (hour * 60) + minutes;
  return timeInMinutes;

}