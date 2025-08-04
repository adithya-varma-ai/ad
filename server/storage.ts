import { 
  users, 
  doctorAvailability,
  employees,
  employeeWellnessMetrics,
  appointments,
  type User, 
  type InsertUser,
  type DoctorAvailability,
  type InsertDoctorAvailability,
  type Employee,
  type InsertEmployee,
  type EmployeeWellnessMetrics,
  type InsertEmployeeWellnessMetrics,
  type Appointment,
  type InsertAppointment
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Doctor availability methods
  getDoctorAvailability(doctorId: number): Promise<DoctorAvailability[]>;
  updateDoctorAvailability(doctorId: number, availability: InsertDoctorAvailability[]): Promise<DoctorAvailability[]>;
  
  // Employee methods
  getAllEmployees(): Promise<Employee[]>;
  getEmployee(id: number): Promise<Employee | undefined>;
  createEmployee(employee: InsertEmployee): Promise<Employee>;
  
  // Employee wellness metrics methods
  getEmployeeWellnessMetrics(employeeId: number, days?: number): Promise<EmployeeWellnessMetrics[]>;
  createEmployeeWellnessMetrics(metrics: InsertEmployeeWellnessMetrics): Promise<EmployeeWellnessMetrics>;
  
  // Appointment methods
  getAppointments(doctorId?: number): Promise<Appointment[]>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private doctorAvailabilities: Map<number, DoctorAvailability[]>;
  private employees: Map<number, Employee>;
  private employeeWellnessMetrics: Map<number, EmployeeWellnessMetrics[]>;
  private appointments: Map<number, Appointment>;
  private currentUserId: number;
  private currentEmployeeId: number;
  private currentAvailabilityId: number;
  private currentMetricsId: number;
  private currentAppointmentId: number;

  constructor() {
    this.users = new Map();
    this.doctorAvailabilities = new Map();
    this.employees = new Map();
    this.employeeWellnessMetrics = new Map();
    this.appointments = new Map();
    this.currentUserId = 1;
    this.currentEmployeeId = 1;
    this.currentAvailabilityId = 1;
    this.currentMetricsId = 1;
    this.currentAppointmentId = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample employees
    const sampleEmployees = [
      { name: "Sarah Johnson", email: "sarah.johnson@company.com", department: "Engineering", position: "Senior Developer", joinDate: new Date("2023-01-15"), managerId: null },
      { name: "Michael Chen", email: "michael.chen@company.com", department: "Marketing", position: "Marketing Manager", joinDate: new Date("2022-08-20"), managerId: null },
      { name: "Emily Davis", email: "emily.davis@company.com", department: "HR", position: "HR Specialist", joinDate: new Date("2023-03-10"), managerId: null },
      { name: "David Rodriguez", email: "david.rodriguez@company.com", department: "Engineering", position: "Frontend Developer", joinDate: new Date("2023-06-01"), managerId: null },
      { name: "Lisa Wang", email: "lisa.wang@company.com", department: "Design", position: "UX Designer", joinDate: new Date("2022-11-30"), managerId: null }
    ];

    sampleEmployees.forEach(emp => {
      const id = this.currentEmployeeId++;
      const employee: Employee = { ...emp, id, managerId: emp.managerId ?? null };
      this.employees.set(id, employee);
      
      // Add sample wellness metrics for each employee
      const metrics: EmployeeWellnessMetrics[] = [];
      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        const metric: EmployeeWellnessMetrics = {
          id: this.currentMetricsId++,
          employeeId: id,
          date,
          stressLevel: Math.floor(Math.random() * 4) + 3, // 3-6 range
          sleepQuality: Math.floor(Math.random() * 3) + 6, // 6-8 range  
          moodRating: Math.floor(Math.random() * 3) + 6, // 6-8 range
          workLifeBalance: Math.floor(Math.random() * 4) + 5, // 5-8 range
          productivityScore: Math.floor(Math.random() * 3) + 7, // 7-9 range
          engagementLevel: Math.floor(Math.random() * 3) + 6, // 6-8 range
          sessionCount: Math.floor(Math.random() * 3), // 0-2
          sessionDuration: Math.floor(Math.random() * 45) + 15, // 15-60 minutes
        };
        metrics.push(metric);
      }
      this.employeeWellnessMetrics.set(id, metrics);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Doctor availability methods
  async getDoctorAvailability(doctorId: number): Promise<DoctorAvailability[]> {
    return this.doctorAvailabilities.get(doctorId) || [];
  }

  async updateDoctorAvailability(doctorId: number, availability: InsertDoctorAvailability[]): Promise<DoctorAvailability[]> {
    const doctorAvailabilityList: DoctorAvailability[] = availability.map(avail => ({
      ...avail,
      id: this.currentAvailabilityId++,
      isAvailable: avail.isAvailable ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    
    this.doctorAvailabilities.set(doctorId, doctorAvailabilityList);
    return doctorAvailabilityList;
  }

  // Employee methods
  async getAllEmployees(): Promise<Employee[]> {
    return Array.from(this.employees.values());
  }

  async getEmployee(id: number): Promise<Employee | undefined> {
    return this.employees.get(id);
  }

  async createEmployee(insertEmployee: InsertEmployee): Promise<Employee> {
    const id = this.currentEmployeeId++;
    const employee: Employee = { 
      ...insertEmployee, 
      id, 
      managerId: insertEmployee.managerId ?? null 
    };
    this.employees.set(id, employee);
    return employee;
  }

  // Employee wellness metrics methods
  async getEmployeeWellnessMetrics(employeeId: number, days: number = 30): Promise<EmployeeWellnessMetrics[]> {
    const metrics = this.employeeWellnessMetrics.get(employeeId) || [];
    return metrics.slice(0, days);
  }

  async createEmployeeWellnessMetrics(insertMetrics: InsertEmployeeWellnessMetrics): Promise<EmployeeWellnessMetrics> {
    const id = this.currentMetricsId++;
    const metrics: EmployeeWellnessMetrics = {
      ...insertMetrics,
      id,
      date: new Date(),
      stressLevel: insertMetrics.stressLevel ?? null,
      sleepQuality: insertMetrics.sleepQuality ?? null,
      moodRating: insertMetrics.moodRating ?? null,
      workLifeBalance: insertMetrics.workLifeBalance ?? null,
      productivityScore: insertMetrics.productivityScore ?? null,
      engagementLevel: insertMetrics.engagementLevel ?? null,
      sessionCount: insertMetrics.sessionCount ?? 0,
      sessionDuration: insertMetrics.sessionDuration ?? 0,
    };
    
    const employeeMetrics = this.employeeWellnessMetrics.get(insertMetrics.employeeId) || [];
    employeeMetrics.unshift(metrics);
    this.employeeWellnessMetrics.set(insertMetrics.employeeId, employeeMetrics);
    
    return metrics;
  }

  // Appointment methods
  async getAppointments(doctorId?: number): Promise<Appointment[]> {
    const allAppointments = Array.from(this.appointments.values());
    if (doctorId) {
      return allAppointments.filter(apt => apt.doctorId === doctorId);
    }
    return allAppointments;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentAppointmentId++;
    const appointment: Appointment = { 
      ...insertAppointment, 
      id,
      status: insertAppointment.status ?? "scheduled",
      duration: insertAppointment.duration ?? 50,
      notes: insertAppointment.notes ?? null
    };
    this.appointments.set(id, appointment);
    return appointment;
  }
}

export const storage = new MemStorage();
