import { Card } from './style';
import { MdExpandMore } from 'react-icons/md';

interface EmployeeDetailCardProps {
  legend: string,
  value: string
}

export default function EmployeeDetailCard({ legend, value }: EmployeeDetailCardProps ) {
  return (
    <Card>
      <legend>{legend}</legend>
      <div>
          <span>{value}</span>
          <MdExpandMore />
      </div>
    </Card>
  );
}