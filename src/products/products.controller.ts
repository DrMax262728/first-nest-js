import {
  Controller,
  Param,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Redirect,
  HttpCode,
  HttpStatus,
  Header,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  // redirect
  // @Redirect('https://www.google.com/', 301)
  getAll(): string {
    return 'All products';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'Get One Product id: ' + id;
  }

  @Post()
  // send custom http status
  @HttpCode(HttpStatus.CREATED)
  // set header
  // @Header('Cache-Control', 'none')
  createProduct(@Body() createProductDto: CreateProductDto) {
    return `Title: ${createProductDto.title}. Price: ${createProductDto.price}`;
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string): string {
    return 'Removed ' + id;
  }

  @Put(':id')
  updateProduct(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ) {
    return 'Update ' + id;
  }
}
