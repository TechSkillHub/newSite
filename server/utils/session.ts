import { verifyToken } from '~/server/utils/jwt';
import { prisma } from './../db'
import { H3Event } from 'h3'

export async function getUserSession(event: H3Event) {
  const authorization = event.node.req.headers['authorization']

  if (!authorization) {
    return null
  }
  
  const token = authorization.split(' ')[1]
  if (!token) {
    return null
  }

  try {
    const decoded:any = verifyToken(token);

    const user = await prisma.user.findUnique({ where: { id: decoded.id } })
    
    if (!user) {
      return null
    }

    return user
  } catch (error) {
    
    return null
  }
}