import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';

// DB에 대한 CRUD 메서드를 제공하는 기능
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(Restaurant)
        private restaurantRepo: Repository<Restaurant>,
    ) {}

    // 음식점 추가
    create(data: Partial<Restaurant>) {
        const restaurant = this.restaurantRepo.create(data);
        return this.restaurantRepo.save(restaurant);
    }
    // 음식점 전체 조회 - 옵션이 없어서 전체 조회
    findAll() {
        return this.restaurantRepo.find();
    }
    // 음식점 id로 조회
    findOne(id: number) {
        const restaurant = this.restaurantRepo.findOneBy({ id });
        if (!restaurant) {
            throw new NotFoundException(`restaurant with ID ${id} not found`);
        }
        return restaurant;
    }
    // 음식점 수정
    async update(id: number, data: Partial<Restaurant>) {
        // 음식점 있는지 확인
        const restaurant = await this.findOne(id);
        await this.restaurantRepo.update(id, data);
        return this.findOne(id);
    }
    // 음식점 삭제
    delete(id: number) {
        return this.restaurantRepo.delete(id);
    }
}
