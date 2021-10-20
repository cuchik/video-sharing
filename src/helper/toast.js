import { message } from 'antd';

class Toast {
  DELAY = 6; // Seconds

  error(text, delay = this.DELAY) {
    message.error(text, delay);
  }

  success(text, delay = this.DELAY) {
    message.success(text, delay);
  }
}

export default new Toast();
