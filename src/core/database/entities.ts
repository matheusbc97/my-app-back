import { FinancePayment } from 'src/modules/finances/entities/finance-payment.entity';
import { Finance } from 'src/modules/finances/entities/finance.entity';
import { GymExerciseItem } from 'src/modules/gym/entities/gym-exercise-item.entity';
import { GymExercise } from 'src/modules/gym/entities/gym-exercise.entity';
import { GymTraining } from 'src/modules/gym/entities/gym-training.entity';
import { Weight } from 'src/modules/weights/weights/entities/weight.entity';

export default [
  GymExercise,
  GymTraining,
  GymExerciseItem,
  Weight,
  Finance,
  FinancePayment,
];
