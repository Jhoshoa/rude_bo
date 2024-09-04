import { IsString, IsBoolean, IsDate, IsOptional } from 'class-validator';

export class CreateStudentDto {
  @IsOptional()
  id?: number;

  @IsString()
  codigoSie: number;

  @IsString()
  grado: number;

  @IsString()
  paralelo: string;

  @IsString()
  apellidoPaterno: string;

  @IsString()
  apellidoMaterno: string;

  @IsString()
  nombres: string;

  @IsString()
  paisNacimiento: string;

  @IsString()
  departamentoNacimiento: string;

  @IsString()
  provinciaNacimiento: string;

  @IsString()
  localidadNacimiento: string;

  @IsString()
  numeroOficialia: number;

  @IsString()
  numLibro: number;

  @IsString()
  numPartida: number;

  @IsString()
  numFolio: number;

  @IsDate()
  fechaNacimiento: Date;

  @IsString()
  numeroCedula: number;

  @IsString()
  complementoCedula: string;

  @IsString()
  expedidoCedula: string;

  @IsString()
  codigoRude: number;

  @IsString()
  sexo: string;

  @IsBoolean()
  tieneDiscapacidad: boolean;

  @IsOptional()
  @IsString()
  numRegistroDiscapacidad?: number;

  @IsOptional()
  @IsString()
  tipoDiscapacidad?: string;

  @IsOptional()
  @IsString()
  gradoDiscapacidad?: string;
}

