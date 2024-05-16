'use client'

import { Home } from "iconsax-react";
import { useSession } from "next-auth/react";

const Card = {
  Box({ children }) {
    return (
      <div className="basis-60 flex flex-1 items-center justify-between gap-8 rounded-lg bg-white p-4 lg:p-6 shadow">
        {children}
      </div>
    );
  },
  Info({ title = "Properties", amount = 583 }) {
    return (
      <div>
        <p className="mt-0.5 line-clamp-1 text-gray-600">{title}</p>
        <h2 className="line-clamp-1 text-3xl font-bold text-slate-800 mt-2">{amount}</h2>
      </div>
    )
  },
  Icon({ children }) {
    return (
      <div className="grid size-14 place-items-center rounded-full bg-button/5 font-medium p-3 text-button">
        {children}
      </div>
    )
  }
}

const cardsData = [
  {
    title: 'Views',
    amount: 0,
    icon: <Home className="w-full h-full" />
  },
  {
    title: "Earnings",
    amount: 0,
    icon: <Home className="w-full h-full" />
  },
  {
    title: "Ref earn",
    amount: 0,
    icon: <Home className="w-full h-full" />
  },
  {
    title: "Avg CPM",
    amount: 0,
    icon: <Home className="w-full h-full" />
  },
]

export default function Dashboard() {
  const { data } = useSession()

  if (data && data.user) {
    return (
      <>
        <h3 className="text-xl font-medium">Today&apos;s Report</h3>
        <div className="flex flex-wrap gap-8 mt-2">
          {
            cardsData.map((_, i) => {
              return (
                <Card.Box key={i}>
                  <Card.Info {..._} />
                  <Card.Icon>
                    {_.icon}
                  </Card.Icon>
                </Card.Box>
              )
            })
          }
        </div>
        <h3 className="text-xl font-medium mt-8">This month report</h3>
        <div className="flex flex-wrap gap-8 mt-2">
          {
            cardsData.map((_, i) => {
              return (
                <Card.Box key={i}>
                  <Card.Info {..._} />
                  <Card.Icon>
                    {_.icon}
                  </Card.Icon>
                </Card.Box>
              )
            })
          }
        </div>
      </>
    );
  }
}
