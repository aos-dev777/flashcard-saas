import {NextResponse} from "next/server"
import

const stripe= new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req) {
    