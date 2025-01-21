import { AnimatePresence } from "motion/react";
import { useState } from "react"
import { CardCollapsed } from "./components/card-collapsed";
import { CardExtended } from "./components/card-extended";
import { ChatFill, CheckCircleFill, PatchCheckFill, StopwatchFill, TagFill } from "react-bootstrap-icons";

export const activities = [
  {
    title: 'New Message!',
    text: 'Sarah sent you a message.',
    date: 'Just Now',
    icon: <ChatFill size={16} strokeWidth={0.5} className="fill-white stroke-gray-400" />,
  },
  {
    title: 'Level Up!',
    text: 'You\'ve unlocked a new achievement.',
    date: '2 min ago',
    icon: <PatchCheckFill size={16} strokeWidth={0.5} className="fill-white stroke-gray-400" />,
  },
  {
    title: 'Reminder: Meeting Today',
    text: 'Your team meeting starts in 30 minutes.',
    date: '3 hour ago',
    icon: <StopwatchFill size={16} strokeWidth={0.5} className="fill-white stroke-gray-400" />,
  },
  {
    title: 'Special Offer!',
    text: 'Save 20% off on subscription upgrade.',
    date: '12 hours ago',
    icon: <TagFill size={16} strokeWidth={0.5} className="fill-white stroke-gray-400 rotate-90" />,
  },
  {
    title: 'Task Assigned',
    text: 'A new task is awaiting your action.',
    date: 'Yesterday',
    icon: <CheckCircleFill size={16} strokeWidth={0.5} className="fill-white stroke-gray-400" />,
  },
]

function App() {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <AnimatePresence initial={false}>
        {
          !isExtended ?
          ( <CardCollapsed setIsExtended={setIsExtended} /> )
          :
          ( <CardExtended setIsExtended={setIsExtended} /> )
        }
      </AnimatePresence>
    </section>
  )
}

export default App
