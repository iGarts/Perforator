export class Randomizer {
    public static GenerateId(): number {
        return (Math.floor(100000 + Math.random() * 900000));
    }

    public static GenerateEmail(length: number = 10): string {
        return this.BaseGenerator(length) + "@credolab.com";
    }

    public static GenerateReferenceNumber(length: number = 99): string {
        return this.BaseGenerator(length);
    }

    public static RandomIntBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    private static BaseGenerator(count: number): string {
        let text = "";
        let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (var i = 0; i < count; i++) {
            text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }

        return text;
    }
}