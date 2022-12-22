import bcrypt from 'bcryptjs';

import Aluno from '../models/Aluno.js'

export const getAlunos = async (req, res, next) => {
  try {
    const alunos = await Aluno.find()

    res.status(200).json(alunos)
  } catch (error) {
    next(error)
  }
}

export const getAluno = async (req, res, next) => {
  try {
    const aluno = await Aluno.findById(req.params.id)

    res.status(200).json(aluno)
  } catch (error) {
    next(error)
  }
}

export const createAluno = async (req, res, next) => {
  const aluno = new Aluno(req.body)
  try {
    const salt = await bcrypt.genSalt(10)
    const hashSenha = await bcrypt.hash(aluno.senha, salt)
    aluno.senha = hashSenha

    const createdAluno = await aluno.save()

    res.status(201).json(createdAluno)
  } catch (error) {
    next(error)
  }
}

export const updateAluno = async (req, res, next) => {
  try {
    const { senha } = req.body

    let novoHash = ''
    if (senha && typeof senha === 'string' && senha.length > 0) {
      const salt = await bcrypt.genSalt(10)
      const hashSenha = await bcrypt.hash(senha, salt)

      novoHash = hashSenha
    }

    const updatedAluno = await Aluno.findByIdAndUpdate(req.params.id, {
      $set: { ...req.body, senha: novoHash }
    }, { new: true })

    res.status(200).json(updatedAluno)
  } catch (error) {
    next(error)
  }
}

export const deleteAluno = async (req, res, next) => {
  try {
    await Aluno.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: 'Aluno excluído com sucesso.' })
  } catch (error) {
    next(error)
  }
}