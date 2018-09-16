const MenuController = require('../controllers/MenuController');

describe('MenuController', () => {
	describe('#getContactCount', () => {
		beforeEach(() => {
			this.menu = new MenuController();
		});
    
		it('should print a string to the console about learning', () => {
			expect(this.menu.remindMe()).toBe(`Learning is a life-long pursuit`);
		});
	});
});
