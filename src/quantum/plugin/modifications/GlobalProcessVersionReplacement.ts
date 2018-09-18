import { FileAbstraction } from "../../core/FileAbstraction";
import { QuantumCore } from "../QuantumCore";

export class GlobalProcessVersionReplacement {
	public static perform(core: QuantumCore, file: FileAbstraction) {
		if (!file.processVariableDefined) {
			if (file.globalProcessVersion.size) {
				file.renderedHeaders.push(`var process = { version : "" };`);
			}
		}
	}
}
