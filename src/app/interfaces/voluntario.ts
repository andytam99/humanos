type Aporte =
  | 'Música'
  | 'Artes Marciales'
  | 'Ejercicios'
  | 'Baile'
  | 'Artesanía'
  | 'Alimentación';

export interface Voluntario {
  nombre: string;
  apellido: string;
  numero: number;
  correo: string;
  aporte: Aporte;
}
