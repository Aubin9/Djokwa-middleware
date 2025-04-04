"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentDto = exports.CreateStudentDto = void 0;
const class_validator_1 = require("class-validator");
const base_user_validator_1 = require("./base-user.validator");
// CreateStudentDto class extends User with required fields
class CreateStudentDto extends base_user_validator_1.User {
    Image;
    Student_ID;
    DOB;
}
exports.CreateStudentDto = CreateStudentDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Image must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "Image", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Student ID must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateStudentDto.prototype, "Student_ID", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Date of birth must be a valid date.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "DOB", void 0);
// UpdateStudentDto class extends User and keeps fields optional
class UpdateStudentDto extends base_user_validator_1.User {
    Image;
    // Student_ID should not be updated directly
    Student_ID;
}
exports.UpdateStudentDto = UpdateStudentDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Image must be a string.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "Image", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Student ID must be a number.' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateStudentDto.prototype, "Student_ID", void 0);
