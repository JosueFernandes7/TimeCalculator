export default class CountDown {
  constructor(futureDate) {
    this.futureDate = new Date(futureDate);
  }
  get currentDate() {
    return new Date();
  }
  get total() {
    const total = Math.floor(this.futureDate - this.currentDate)
    return total < 0 ? 0 : total;
  }
  get days() {
    return Math.floor(this.total / (24*60*60*1000));
  }
  get hours() {
    return Math.floor(this.total / (60*60*1000));
  }
  get minutes() {
    return Math.floor(this.total / (60*1000));
  }
  get seconds() {
    return Math.floor(this.total / 1000);
  }
  get newCount() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }
}