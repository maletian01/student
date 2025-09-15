import bcrypt from 'bcryptjs';

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'teacher' | 'student';
    createdAt: Date;

    constructor(id: number, username: string, email: string, password: string, role: 'admin' | 'teacher' | 'student' = 'student') {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.createdAt = new Date();
    }

    // 验证用户输入
    validate(): boolean {
        if (!this.username || this.username.trim() === "") {
            throw new Error("用户名不能为空");
        }
        if (this.username.length < 3) {
            throw new Error("用户名至少需要3个字符");
        }
        if (!this.email || !this.isValidEmail(this.email)) {
            throw new Error("请输入有效的邮箱地址");
        }
        if (!this.password || this.password.length < 6) {
            throw new Error("密码至少需要6个字符");
        }
        return true;
    }

    // 邮箱格式验证
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // 加密密码
    async hashPassword(): Promise<void> {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    // 验证密码
    async comparePassword(plainPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, this.password);
    }

    // 转换为安全的JSON格式（不包含密码）
    toSafeObject() {
        const { password, ...safeUser } = this;
        return safeUser;
    }
}

// 用户存储类 (实际项目中应该使用数据库)
export class UserStore {
    private static users: User[] = [];
    private static currentId = 1;

    static async createUser(userData: { username: string, email: string, password: string, role?: 'admin' | 'teacher' | 'student' }): Promise<User> {
        const user = new User(this.currentId++, userData.username, userData.email, userData.password, userData.role);
        user.validate();
        await user.hashPassword();
        this.users.push(user);
        return user;
    }

    static findByUsername(username: string): User | undefined {
        return this.users.find(user => user.username === username);
    }

    static findByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    static findById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    static getAllUsers(): User[] {
        return this.users;
    }

    static deleteUser(id: number): boolean {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }

    // 初始化默认管理员账户
    static async initializeDefaultAdmin(): Promise<void> {
        if (this.users.length === 0) {
            await this.createUser({
                username: 'admin',
                email: 'admin@student.com',
                password: 'admin123',
                role: 'admin'
            });
            console.log('默认管理员账户已创建: admin/admin123');
        }
    }
}