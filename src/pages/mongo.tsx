import Head from "next/head";
import clientPromise from "../../lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type ConnectionStatus = {
    isConnected: boolean;
}

export const getServerSideProps: GetServerSideProps<ConnectionStatus> = async () => {
    try{
        const client = await clientPromise;
        await client.db();
        return { props: { isConnected: true } };
    } catch (err) {
        return { props: { isConnected: false } };
    }
}

