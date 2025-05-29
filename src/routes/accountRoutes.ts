import { Router } from 'express';
import {
  createAccount,
  getAccounts,
  getAccountByUsername,
  updateAccount,
  deleteAccount,
} from '../controllers/accountController';

const router = Router();

router.get('/', getAccounts);
router.get('/:id', getAccountByUsername);
router.post('/', createAccount);
router.put('/:id', updateAccount);
router.delete('/:id', deleteAccount);

export default router;
