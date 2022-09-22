type Deseos =
  | 'Tan pronto esté disponible'
  | 'Quizás en cuanto conozca más'
  | 'Tras un tiempo de conocer';

export interface Miembro {
  nombre: string;
  apellido: string;
  numero: number;
  correo: string;
  deseo: Deseos;
}
