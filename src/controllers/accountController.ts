import { Request, Response, NextFunction } from 'express';
import { accounts, Account } from '../models/account';

// Create an account
export const createAccount = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;
    const newAccount: Account = { username: username, password: password };
    accounts.push(newAccount);
    res.status(201).json(newAccount);
  } catch (error) {
    next(error);
  }
};

// Read all accounts
export const getAccounts = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(accounts);
  } catch (error) {
    next(error);
  }
};

// Read single account
export const getAccountByUsername = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.params.username;
    const account = accounts.find((i) => i.username === user);
    if (!account) {
      res.status(404).json({ message: 'Account not found' });
      return;
    }
    res.json(account);
  } catch (error) {
    next(error);
  }
};

// Update an account
export const updateAccount = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.params.id;
    const { name } = req.body;
    const accountIndex = accounts.findIndex((i) => i.username === user);
    if (accountIndex === -1) {
      res.status(404).json({ message: 'Account not found' });
      return;
    }
    accounts[accountIndex].username = name;
    res.json(accounts[accountIndex]);
  } catch (error) {
    next(error);
  }
};

// Delete an account
export const deleteAccount = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.username;
    const accountIndex = accounts.findIndex((i) => i.username === id);
    if (accountIndex === -1) {
      res.status(404).json({ message: 'Account not found' });
      return;
    }
    const deletedAccount = accounts.splice(accountIndex, 1)[0];
    res.json(deletedAccount);
  } catch (error) {
    next(error);
  }
};
