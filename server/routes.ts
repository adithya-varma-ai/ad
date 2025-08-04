import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDoctorAvailabilitySchema, insertEmployeeWellnessMetricsSchema, insertAppointmentSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Doctor availability routes
  app.get("/api/doctor/:doctorId/availability", async (req, res) => {
    try {
      const doctorId = parseInt(req.params.doctorId);
      const availability = await storage.getDoctorAvailability(doctorId);
      res.json(availability);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.put("/api/doctor/:doctorId/availability", async (req, res) => {
    try {
      const doctorId = parseInt(req.params.doctorId);
      const availabilityArray = z.array(insertDoctorAvailabilitySchema).parse(req.body);
      const availability = await storage.updateDoctorAvailability(doctorId, availabilityArray);
      res.json(availability);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Employee routes
  app.get("/api/employees", async (req, res) => {
    try {
      const employees = await storage.getAllEmployees();
      res.json(employees);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/employees/:employeeId", async (req, res) => {
    try {
      const employeeId = parseInt(req.params.employeeId);
      const employee = await storage.getEmployee(employeeId);
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
      res.json(employee);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Employee wellness metrics routes
  app.get("/api/employees/:employeeId/wellness-metrics", async (req, res) => {
    try {
      const employeeId = parseInt(req.params.employeeId);
      const days = req.query.days ? parseInt(req.query.days as string) : 30;
      const metrics = await storage.getEmployeeWellnessMetrics(employeeId, days);
      res.json(metrics);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/employees/:employeeId/wellness-metrics", async (req, res) => {
    try {
      const employeeId = parseInt(req.params.employeeId);
      const metricsData = insertEmployeeWellnessMetricsSchema.parse({
        ...req.body,
        employeeId
      });
      const metrics = await storage.createEmployeeWellnessMetrics(metricsData);
      res.json(metrics);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Appointments routes
  app.get("/api/appointments", async (req, res) => {
    try {
      const doctorId = req.query.doctorId ? parseInt(req.query.doctorId as string) : undefined;
      const appointments = await storage.getAppointments(doctorId);
      res.json(appointments);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/appointments", async (req, res) => {
    try {
      const appointmentData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(appointmentData);
      res.json(appointment);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
