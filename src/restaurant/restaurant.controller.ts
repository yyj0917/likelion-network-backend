import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Get()
    findAll(){
        return this.restaurantService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.restaurantService.findOne(+id);
    }

    @Post()
    create(@Body() restaurantData: CreateRestaurantDto){
        return this.restaurantService.create(restaurantData);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() restaurantData: UpdateRestaurantDto){
        return this.restaurantService.update(+id, restaurantData);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.restaurantService.delete(+id);
    }
}
