<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/ui/accordion';

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "Lorem ipsum dolor sit amet",
    icon: "💰"
  },
  {
    title: "Active Users",
    value: "2,345",
    description: "Consectetur adipiscing elit",
    icon: "👥"
  },
  {
    title: "Projects",
    value: "12",
    description: "Sed do eiusmod tempor",
    icon: "📊"
  },
  {
    title: "Tasks Completed",
    value: "89%",
    description: "Ut labore et dolore magna",
    icon: "✅"
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
              <CardTitle>Recent Activity 📅</CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible class="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Project Updates</AccordionTrigger>
                  <AccordionContent>
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <span class="mr-2">🎯</span>
                        <div>
                          <p class="text-sm font-medium">Project Milestone Achieved</p>
                          <p class="text-sm text-muted-foreground">Sed do eiusmod tempor incididunt ut labore</p>
                        </div>
                      </div>
                      <div class="flex items-center">
                        <span class="mr-2">📝</span>
                        <div>
                          <p class="text-sm font-medium">New Documentation Added</p>
                          <p class="text-sm text-muted-foreground">Ut enim ad minim veniam, quis nostrud</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Team Activity</AccordionTrigger>
                  <AccordionContent>
                    <div class="flex items-center">
                      <span class="mr-2">👋</span>
                      <div>
                        <p class="text-sm font-medium">New Team Member Onboarded</p>
                        <p class="text-sm text-muted-foreground">Duis aute irure dolor in reprehenderit</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions 🚀</CardTitle>
              <CardDescription>Excepteur sint occaecat cupidatat non proident.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible class="w-full">
                <AccordionItem value="action-1">
                  <AccordionTrigger>Available Actions</AccordionTrigger>
                  <AccordionContent>
                    <div class="space-y-2">
                      <button class="w-full flex items-center justify-between p-2 bg-secondary rounded-lg hover:bg-secondary/80">
                        <span>Create New Project</span>
                        <span>➕</span>
                      </button>
                      <button class="w-full flex items-center justify-between p-2 bg-secondary rounded-lg hover:bg-secondary/80">
                        <span>Invite Team Member</span>
                        <span>👥</span>
                      </button>
                      <button class="w-full flex items-center justify-between p-2 bg-secondary rounded-lg hover:bg-secondary/80">
                        <span>Generate Report</span>
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
