interface NewClient {
  label?: string;
  class: 'desktop' | 'phone' | 'tablet';
  cookie: string;
  password?: string;
  model?: string;
  type: 'permanent' | 'temporary';
  lastkey: Object;
  prekeys: Array<Object>;
  sigkeys: {
    enckey: string;
    mackey: string;
  };
}

export default NewClient;
