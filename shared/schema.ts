import { pgTable, text, serial, integer, boolean, timestamp, json, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Doctor availability table
export const doctorAvailability = pgTable("doctor_availability", {
  id: serial("id").primaryKey(),
  doctorId: integer("doctor_id").notNull(),
  dayOfWeek: integer("day_of_week").notNull(), // 0-6 (Sunday-Saturday)
  startTime: text("start_time").notNull(), // "09:00"
  endTime: text("end_time").notNull(), // "17:00"
  isAvailable: boolean("is_available").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Employee wellness data for HR analytics
export const employees = pgTable("employees", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  department: text("department").notNull(),
  position: text("position").notNull(),
  joinDate: timestamp("join_date").notNull(),
  managerId: integer("manager_id"),
});

export const employeeWellnessMetrics = pgTable("employee_wellness_metrics", {
  id: serial("id").primaryKey(),
  employeeId: integer("employee_id").notNull(),
  date: timestamp("date").defaultNow(),
  stressLevel: integer("stress_level"), // 1-10 scale
  sleepQuality: integer("sleep_quality"), // 1-10 scale
  moodRating: integer("mood_rating"), // 1-10 scale
  workLifeBalance: integer("work_life_balance"), // 1-10 scale
  productivityScore: integer("productivity_score"), // 1-10 scale
  engagementLevel: integer("engagement_level"), // 1-10 scale
  sessionCount: integer("session_count").default(0),
  sessionDuration: integer("session_duration").default(0), // in minutes
});

// Appointments
export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  doctorId: integer("doctor_id").notNull(),
  patientId: integer("patient_id").notNull(),
  appointmentDate: timestamp("appointment_date").notNull(),
  duration: integer("duration").default(50), // in minutes
  status: text("status").default("scheduled"), // scheduled, completed, cancelled
  type: text("type").notNull(), // consultation, therapy, follow-up
  notes: text("notes"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDoctorAvailabilitySchema = createInsertSchema(doctorAvailability).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertEmployeeSchema = createInsertSchema(employees).omit({
  id: true,
});

export const insertEmployeeWellnessMetricsSchema = createInsertSchema(employeeWellnessMetrics).omit({
  id: true,
  date: true,
});

export const insertAppointmentSchema = createInsertSchema(appointments).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type DoctorAvailability = typeof doctorAvailability.$inferSelect;
export type InsertDoctorAvailability = z.infer<typeof insertDoctorAvailabilitySchema>;
export type Employee = typeof employees.$inferSelect;
export type InsertEmployee = z.infer<typeof insertEmployeeSchema>;
export type EmployeeWellnessMetrics = typeof employeeWellnessMetrics.$inferSelect;
export type InsertEmployeeWellnessMetrics = z.infer<typeof insertEmployeeWellnessMetricsSchema>;
export type Appointment = typeof appointments.$inferSelect;
export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
