import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn('increment', { name: 'student_id' })
  id: number;

  @Column({ name: 'codigo_sie' })
  codigoSie: number;

  @Column()
  grado: number;

  @Column()
  paralelo: string;

  @Column({ name: 'apellido_paterno' })
  apellidoPaterno: string;

  @Column({ name: 'apellido_materno' })
  apellidoMaterno: string;

  @Column({ name: 'nombres' })
  nombres: string;

  @Column({ name: 'pais_nacimiento' })
  paisNacimiento: string;

  @Column({ name: 'departamento_nacimiento' })
  departamentoNacimiento: string;

  @Column({ name: 'provincia_nacimiento' })
  provinciaNacimiento: string;

  @Column({ name: 'localidad_nacimiento' })
  localidadNacimiento: string;

  @Column({ name: 'numero_oficialia' })
  numeroOficialia: number;

  @Column({ name: 'num_libro' })
  numLibro: number;

  @Column({ name: 'num_partida' })
  numPartida: number;

  @Column({ name: 'num_folio' })
  numFolio: number;

  @Column({ name: 'fecha_nacimiento' })
  fechaNacimiento: Date;

  @Column({ name: 'numero_cedula' })
  numeroCedula: number;

  @Column({ name: 'complemento_cedula' })
  complementoCedula: string;

  @Column({ name: 'expedido_cedula' })
  expedidoCedula: string;

  @Column({ name: 'codigo_rude' })
  codigoRude: number;

  @Column()
  sexo: string;

  @Column({ name: 'tiene_discapacidad' })
  tieneDiscapacidad: boolean;

  @Column({ name: 'num_registro_discapacidad', nullable: true })
  numRegistroDiscapacidad: number;

  @Column({ name: 'tipo_discapacidad', nullable: true })
  tipoDiscapacidad: string;

  @Column({ name: 'grado_discapacidad', nullable: true })
  gradoDiscapacidad: string;
}
