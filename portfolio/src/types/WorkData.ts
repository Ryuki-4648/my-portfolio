import { BaseWorkData } from './BaseWorkData';

export interface WorkData extends BaseWorkData {
  thumbnail: string;
  label: string;
  page: string;
  type: string[];
  explain: string;
  task: string;
  notice: string;
  url: string;
  summary: string;
  github: string;
}