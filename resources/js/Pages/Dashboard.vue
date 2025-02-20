<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/ui/accordion';

const stats = [
  {
    title: "Questions Answered",
    value: "1,234",
    description: "Total questions attempted in practice sessions",
    icon: "📝"
  },
  {
    title: "Success Rate",
    value: "76%",
    description: "Average correct answers in practice tests",
    icon: "✅"
  },
  {
    title: "Study Hours",
    value: "45",
    description: "Total hours spent on practice this month",
    icon: "⏱️"
  },
  {
    title: "Question Bank",
    value: "5,000+",
    description: "Available UKMPPD practice questions",
    icon: "🏥"
  }
];
</script>

<template>
  <AppLayout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Dashboard Overview 📈
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card v-for="stat in stats" :key="stat.title" class="hover:shadow-lg transition-shadow">
            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle class="text-sm font-medium">
                {{ stat.title }}
              </CardTitle>
              <div class="text-2xl">
                {{ stat.icon }}
              </div>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">{{ stat.value }}</div>
              <p class="text-xs text-muted-foreground">{{ stat.description }}</p>
            </CardContent>
          </Card>
        </div>

        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Practice Sessions 📚</CardTitle>
              <CardDescription>Track your UKMPPD preparation progress</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible class="w-full">
                <AccordionItem value="session-1">
                  <AccordionTrigger>Internal Medicine</AccordionTrigger>
                  <AccordionContent>
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <span class="mr-2">🫀</span>
                        <div>
                          <p class="text-sm font-medium">Cardiovascular System Quiz</p>
                          <p class="text-sm text-muted-foreground">Score: 85% - 45 questions completed</p>
                        </div>
                      </div>
                      <div class="flex items-center">
                        <span class="mr-2">🫁</span>
                        <div>
                          <p class="text-sm font-medium">Respiratory System Quiz</p>
                          <p class="text-sm text-muted-foreground">Score: 78% - 30 questions completed</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="session-2">
                  <AccordionTrigger>Surgery</AccordionTrigger>
                  <AccordionContent>
                    <div class="flex items-center">
                      <span class="mr-2">🔬</span>
                      <div>
                        <p class="text-sm font-medium">General Surgery Cases</p>
                        <p class="text-sm text-muted-foreground">Score: 82% - 25 questions completed</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Resources 📚</CardTitle>
              <CardDescription>Access your UKMPPD preparation materials</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible class="w-full">
                <AccordionItem value="resources-1">
                  <AccordionTrigger>Practice Options</AccordionTrigger>
                  <AccordionContent>
                    <div class="space-y-2">
                      <button class="w-full flex items-center justify-between p-2 bg-secondary rounded-lg hover:bg-secondary/80">
                        <span>Start New Quiz Session</span>
                        <span>📝</span>
                      </button>
                      <button class="w-full flex items-center justify-between p-2 bg-secondary rounded-lg hover:bg-secondary/80">
                        <span>Review Previous Answers</span>
                        <span>📖</span>
                      </button>
                      <button class="w-full flex items-center justify-between p-2 bg-secondary rounded-lg hover:bg-secondary/80">
                        <span>Contribute Questions</span>
                        <span>🤝</span>
                      </button>
                      <button class="w-full flex items-center justify-between p-2 bg-secondary rounded-lg hover:bg-secondary/80">
                        <span>View Performance Analytics</span>
                        <span>📊</span>
                      </button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
