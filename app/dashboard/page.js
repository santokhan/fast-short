import Section from "@/components/Section";

export default function Dashboard() {
  return (
    <>
      <main className="min-h-screen">
        <div className="h-16"></div>
        <Section>
          <div>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Welcome to dashboard</h1>
          </div>
        </Section>
      </main>
    </>
  );
}
