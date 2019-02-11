import app from './app';

const PORT = 4000;

const handleListening = () => {
  console.log(`localhost ${PORT} is litening`);
};

app.listen(PORT, handleListening);
