// src/modules/vehicle/controllers/vehicle.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import VehicleController from '../api/vehicle.controller';
import { VehicleService } from '../api/vehicle.service';
import { CreateVehicleDto } from '../dtos/create-vehicle.dto';
import { GetAllVehiclesQuery } from '../dtos/get-all-vehicle.dto';

describe('VehicleController', () => {
  let controller: VehicleController;
  let service: VehicleService;
  let response: Response;

  beforeEach(async () => {
    const mockVehicleService = {
      getAllVehicle: jest.fn(),
      createVehicle: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleController],
      providers: [
        {
          provide: VehicleService,
          useValue: mockVehicleService,
        },
      ],
    }).compile();

    controller = module.get<VehicleController>(VehicleController);
    service = module.get<VehicleService>(VehicleService);
    response = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() } as any;
  });

  describe('GET /vehicles', () => {
    it('debe retornar la lista de vehiculos y estado 200', async () => {
      const mockVehicles = [{ 
        name: 'vehicle name',
        cargo_capacity: '2',
        consumables: '2',
        cost_in_credits: '3',
        crew: '3',
        films: ['string'],
        length: '3',
        manufacturer: '3',
        max_atmosphering_speed: '3',
        model: 'model name',
        passengers: '2',
        pilots: ['string'],
        url: 'url.com',
        vehicle_class: 'class name'
     }];
      service.getAllVehicle = jest.fn().mockResolvedValue(mockVehicles);

      const query: GetAllVehiclesQuery = {name: 'string', model: 'model'}
      await controller.getAllVehicles(response, query);

      expect(service.getAllVehicle).toHaveBeenCalled();
      expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
      expect(response.json).toHaveBeenCalledWith(mockVehicles);
    });

    it('deberia retornar estado 400 si hay algun error', async () => {
      const error = new Error('Something went wrong');
      service.getAllVehicle = jest.fn().mockRejectedValue(error);

      const query: GetAllVehiclesQuery = {name: '', model: ''}

      await controller.getAllVehicles(response, query);

      expect(service.getAllVehicle).toHaveBeenCalled();
      expect(response.status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST);
      expect(response.json).toHaveBeenCalledWith({ errores: error.message });
    });
  });

  describe('POST /vehicles', () => {
    it('deberia crear un nuevo vehiculo y retornar un estado 201', async () => {
      const createVehicleDto: CreateVehicleDto = { 
        name: 'vehicle name',
        cargo_capacity: '2',
        consumables: '2',
        cost_in_credits: '3',
        crew: '3',
        films: ['string'],
        length: '3',
        manufacturer: '3',
        max_atmosphering_speed: '3',
        model: 'model name',
        passengers: '2',
        pilots: ['string'],
        url: 'url.com',
        vehicle_class: 'class name'
     };
      const mockVehicle = { id: 1, ...createVehicleDto };
      service.createVehicle = jest.fn().mockResolvedValue(mockVehicle);

      await controller.createVehicle(createVehicleDto, response);

      expect(service.createVehicle).toHaveBeenCalledWith(createVehicleDto);
      expect(response.status).toHaveBeenCalledWith(HttpStatus.CREATED);
      expect(response.json).toHaveBeenCalledWith(mockVehicle);
    });

    it('deberia retornar estado 400 si hay algun error', async () => {
        const createVehicleDto: CreateVehicleDto = { 
            name: 'hola',
            cargo_capacity: '1',
            consumables: '2',
            cost_in_credits: '3',
            crew: '3',
            films: ['3'],
            length: '3',
            manufacturer: '3',
            max_atmosphering_speed: '3',
            model: '3',
            passengers: '2',
            pilots: ['2'],
            url: 'url.com',
            vehicle_class: 'class'
         };
      const error = new Error('Validation failed');
      service.createVehicle = jest.fn().mockRejectedValue(error);

      await controller.createVehicle(createVehicleDto, response);

      expect(service.createVehicle).toHaveBeenCalledWith(createVehicleDto);
      expect(response.status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST);
      expect(response.json).toHaveBeenCalledWith({ errores: error.message });
    });
  });
});
