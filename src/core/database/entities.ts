import { Bank } from 'src/modules/finances/entities/bank.entity';
import { FinanceNote } from 'src/modules/finances/entities/finance-note.entity';
import { FinancePayment } from 'src/modules/finances/entities/finance-payment.entity';
import { Finance } from 'src/modules/finances/entities/finance.entity';
import { Goal } from 'src/modules/goals/entities/goal.entity';
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
  FinanceNote,
  Bank,
  Goal,
];
